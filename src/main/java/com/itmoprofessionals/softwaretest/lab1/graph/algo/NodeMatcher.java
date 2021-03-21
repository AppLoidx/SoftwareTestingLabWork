package com.itmoprofessionals.softwaretest.lab1.graph.algo;

import com.itmoprofessionals.softwaretest.lab1.graph.model.Node;

import java.util.HashSet;
import java.util.Set;
import java.util.function.Predicate;

public final class NodeMatcher {
    private NodeMatcher() {}

    /**
     *
     * Applies DFS algorithm to graph and matches the predicate
     *
     * @param startNode node to start DFS algorithm
     * @param predicate predicate to match
     * @return only matched nodes
     */
    public static Set<Node> apply(Node startNode, Predicate<Node> predicate) {

        Set<Node> nodes = new HashSet<>();

        DFS.applyTo(startNode, node -> {
            if (predicate.test(node)) nodes.add(node);
        });

        return nodes;
    }
}
