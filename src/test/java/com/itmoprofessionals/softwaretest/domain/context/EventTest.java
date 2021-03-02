package com.itmoprofessionals.softwaretest.domain.context;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class EventTest {
    @Test
    void eventOf() {
        final String description = "Test event";
        final EventType eventType = EventType.BURN;
        Event event = Event.of(description, eventType);
        assertEquals(description, event.getDescription());
        assertEquals(eventType, event.getEventType());
    }
}