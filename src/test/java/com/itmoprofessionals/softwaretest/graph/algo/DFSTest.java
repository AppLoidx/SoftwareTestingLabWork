package com.itmoprofessionals.softwaretest.graph.algo;

import com.itmoprofessionals.softwaretest.graph.algo.DFS;
import com.itmoprofessionals.softwaretest.graph.model.Node;
import com.itmoprofessionals.softwaretest.util.GraphUtil;
import org.junit.jupiter.api.Test;

import java.util.LinkedList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;


class DFSTest {


    @Test
    void dfs_sampleCheck() {
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

}