package com.itmoprofessionals.softwaretest.graph.algo;

import com.itmoprofessionals.softwaretest.graph.model.Node;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashSet;
import java.util.Set;
import java.util.Stack;

public final class DFS {
    private static final Logger log = LoggerFactory.getLogger(DFS.class);

    private DFS() {}

    /**
     * Applies DFS algorithm to graph (without recursion)
     *
     * @param startNode graph start node
     * @param nodeObserver observer that will be applied to all visited nodes
     */
    public static void applyTo(final Node startNode, final NodeObserver nodeObserver) {
        if (startNode == null) return;
        log.debug("Start DFS algorithm");

        final Set<Node> visited = new HashSet<>();
        final Stack<Node> stack = new Stack<>();

        stack.push(startNode);

        while(!stack.isEmpty()) {
            Node current = stack.pop();
            visited.add(current);
            nodeObserver.onNode(current);
            log.debug("Visit node number : " + current.getId());
            for (Node node : current.getTargets()) {
                if (!visited.contains(node)) {
                    stack.push(node);
                }
            }
        }
    }

}
