package com.itmoprofessionals.softwaretest.graph.algo;

import com.itmoprofessionals.softwaretest.graph.model.Node;
import com.itmoprofessionals.softwaretest.util.GraphUtil;
import org.junit.jupiter.api.Test;

import java.util.LinkedList;

import static org.junit.jupiter.api.Assertions.*;


class DFSTest {


    @Test
    void dfsSampleCheckTest() {
        Node sampleNode = GraphUtil.createSampleGraph();
        LinkedList<Node> path = new LinkedList<>();
        DFS.applyTo(sampleNode, path::add);

        assertEquals(1, path.get(0).getId());
        assertEquals(2, path.get(1).getId());
        Node node3 = path.get(2);

        /*

        из-за того что соседние ноды хранятся в неупорядоченном виде
        мы должны рассмотреть все варианты когда алгоритм выбирает одну или другую
        соседнюю ноду

        в этом случае, алгоритм может пройти через ноду 4 или 3 в зависимости от реализации

        */
        assertTrue(node3.getId() == 4 || node3.getId() == 3);
        assertEquals(5, path.get(3).getId());
        Node node5 = path.get(4);
        assertTrue(node5.getId() == 4 || node5.getId() == 3);
    }
    @Test
    void specialBlackTest(){
        Node sampleNode = GraphUtil.createSampleGraph();
        LinkedList<Node> path = new LinkedList<>();
        DFS.applyTo(sampleNode, path::add);

        assertEquals(15,path.stream().mapToInt(Node::getId).sum());
    }

    @Test
    void dfsOneNodeTest() {
        Node sampleNode = GraphUtil.createOneNodeGraph();
        LinkedList<Node> path = new LinkedList<>();
        DFS.applyTo(sampleNode, path::add);

        assertEquals(1, path.size());
        assertEquals(path.get(0).getId(), 1);
    }

    @Test
    void dfsNoConnectivityNodeTest() {
        Node sampleNode = GraphUtil.createNoConnectiveGraph();
        LinkedList<Node> path = new LinkedList<>();
        DFS.applyTo(sampleNode, path::add);

        assertEquals(2, path.size());
        assertNotEquals(path.get(0).getId(), 3);
    }

    @Test
    void dfsCycleTest() {
        Node sampleNode = GraphUtil.createSampleGraph();
        LinkedList<Node> path = new LinkedList<>();
        DFS.applyTo(sampleNode, path::add);

        assertEquals(path.get(0).getId(), 1);
        assertNotEquals(path.get(4).getId(), 1);
    }

}