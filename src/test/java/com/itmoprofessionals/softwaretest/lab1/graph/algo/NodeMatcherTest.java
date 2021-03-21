package com.itmoprofessionals.softwaretest.lab1.graph.algo;

import com.itmoprofessionals.softwaretest.lab1.graph.model.Node;
import com.itmoprofessionals.softwaretest.lab1.util.GraphUtil;
import org.junit.jupiter.api.Test;

import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;

import static org.junit.jupiter.api.Assertions.assertEquals;

class NodeMatcherTest {
    @Test
    void sampleTest() {
        Node sampleGraph = GraphUtil.createSampleGraph();
        Set<Node> matchedNodes = NodeMatcher.apply(sampleGraph, n -> n.getId() < 3);
        AtomicInteger matchedNodesExpectedSize = new AtomicInteger();
        DFS.applyTo(sampleGraph, n -> {
            if (n.getId() < 3) matchedNodesExpectedSize.getAndIncrement();
        });

        assertEquals(matchedNodesExpectedSize.get(), matchedNodes.size());
    }
}