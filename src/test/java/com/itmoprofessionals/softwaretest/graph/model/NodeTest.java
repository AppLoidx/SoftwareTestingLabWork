package com.itmoprofessionals.softwaretest.graph.model;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class NodeTest {

    @Test
    void equalsCheck_notSameId() {
        Node n1 = new Node(1);
        Node n2 = new Node(2);

        assertNotEquals(n2, n1);
    }

    @Test
    void equalsCheck_sameId() {
        Node n1 = new Node(1);
        Node n2 = new Node(1);

        assertEquals(n2, n1);
    }

    @Test
    void equalsCheck_sameIdDifferentTargets() {
        Node n1 = new Node(1, List.of(new Node(2)));
        Node n2 = new Node(1);

        assertEquals(n2, n1);
    }

}