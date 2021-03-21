package com.itmoprofessionals.softwaretest.lab1.domain.context;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class EventProcessorDefaultTest {
    @Test
    void nullPass() {
        EventProcessorDefault eventProcessorDefault = new EventProcessorDefault();
        assertThrows(IllegalArgumentException.class, () -> eventProcessorDefault.processEvent(null));
    }

    @Test
    void sample() {
        EventProcessorDefault eventProcessorDefault = new EventProcessorDefault();
        assertNotNull(eventProcessorDefault.processEvent(Event.of("Test event", EventType.BURN)));
    }

}