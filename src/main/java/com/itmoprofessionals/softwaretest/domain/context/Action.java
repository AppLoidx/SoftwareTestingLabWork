package com.itmoprofessionals.softwaretest.domain.context;

@FunctionalInterface
public interface Action {
    Event run();
}
