package com.itmoprofessionals.softwaretest.algo.impl;

import com.itmoprofessionals.softwaretest.graph.model.Node;

import java.util.HashSet;
import java.util.Set;
import java.util.function.Predicate;

public final class NodeMatcher {
    private NodeMatcher() {}
    public static Set<Node> apply(Node startNode, Predicate<Node> predicate) {

        Set<Node> nodes = new HashSet<>();

        DFS.applyTo(startNode, node -> {
            if (predicate.test(node)) nodes.add(node);
        });

        return nodes;
    }
}
