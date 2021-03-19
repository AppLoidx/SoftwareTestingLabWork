package com.itmoprofessionals.softwaretest.lab1.graph.algo;

import com.itmoprofessionals.softwaretest.lab1.graph.model.Node;


@FunctionalInterface
public interface NodeObserver {
    void onNode(Node node);
}
