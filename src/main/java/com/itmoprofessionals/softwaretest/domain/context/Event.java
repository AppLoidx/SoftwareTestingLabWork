package com.itmoprofessionals.softwaretest.domain.context;

public class Event {
    private final String description;
    private final EventType eventType;

    public Event(String description, EventType eventType) {
        this.description = description;
        this.eventType = eventType;
    }

    public String getDescription() {
        return description;
    }

    public EventType getEventType() {
        return eventType;
    }


    public static Event of(String description, EventType eventType) {
        return new Event(description, eventType);
    }

}
