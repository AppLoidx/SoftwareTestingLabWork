package com.itmoprofessionals.softwaretest.lab1.domain.context;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class EventTest {
    @Test
    void eventOf_descriptionTest() {
        final String description = "Test event";
        final EventType eventType = EventType.BURN;
        Event event = Event.of(description, eventType);
        assertEquals(description, event.getDescription());
    }

    @Test
    void eventOf_eventTypeTest() {
        final String description = "Test event";
        final EventType eventType = EventType.BURN;
        Event event = Event.of(description, eventType);
        assertEquals(eventType, event.getEventType());
    }
}