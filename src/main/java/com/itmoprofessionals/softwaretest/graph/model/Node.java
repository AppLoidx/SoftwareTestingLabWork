package com.itmoprofessionals.softwaretest.graph.model;

import java.util.*;

/**
 * Graph's node
 */
public class Node {
    private final HashSet<Node> targets = new HashSet<>();
    private final int id;

    public Node(int id, Collection<Node> targets) {
        this(id);
        this.targets.addAll(targets);
    }

    public Node(int id) {
        this.id = id;
    }

    public void addTarget(Node ... nodes) {
        this.targets.addAll(Arrays.asList(nodes));
    }

    public Set<Node> getTargets() {
        return targets;
    }

    public int getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Node node = (Node) o;
        return id == node.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
