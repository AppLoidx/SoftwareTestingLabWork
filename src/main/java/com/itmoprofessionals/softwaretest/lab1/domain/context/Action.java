package com.itmoprofessionals.softwaretest.lab1.domain.context;

@FunctionalInterface
public interface Action {
    Event run();
}
