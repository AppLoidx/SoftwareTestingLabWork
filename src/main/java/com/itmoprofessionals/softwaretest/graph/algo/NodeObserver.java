package com.itmoprofessionals.softwaretest.graph.algo;

import com.itmoprofessionals.softwaretest.graph.model.Node;


@FunctionalInterface
public interface NodeObserver {
    void onNode(Node node);
}
