package com.itmoprofessionals.softwaretest.algo.impl;

import com.itmoprofessionals.softwaretest.graph.model.Node;


@FunctionalInterface
public interface NodeObserver {
    void onNode(Node node);
}
