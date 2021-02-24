package com.itmoprofessionals.softwaretest.domain.context;

import java.util.LinkedList;

public class Scene {
    // should have order
    private final LinkedList<Event> events = new LinkedList<>();

    public void applyAction(Action action) {
        events.add(action.run());
    }

    public LinkedList<Event> getEvents() {
        return events;
    }
}
