package com.itmoprofessionals.softwaretest.graph.algo;

import com.itmoprofessionals.softwaretest.graph.model.Node;

import java.util.HashSet;
import java.util.Set;
import java.util.Stack;

public final class DFS {

    private DFS() {}

    /**
     * Applies DFS algorithm to graph (without recursion)
     *
     * @param startNode graph start node
     * @param nodeObserver observer that will be applied to all visited nodes
     */
    public static void applyTo(final Node startNode, final NodeObserver nodeObserver) {

        final Set<Node> visited = new HashSet<>();
        final Stack<Node> stack = new Stack<>();

        stack.push(startNode);

        while(!stack.isEmpty()) {
            Node current = stack.pop();
            visited.add(current);
            nodeObserver.onNode(current);
            for (Node node : current.getTargets()) {
                if (!visited.contains(node)) {
                    stack.push(node);
                }
            }
        }
    }

}
