package com.itmoprofessionals.softwaretest.util;

import com.itmoprofessionals.softwaretest.domain.context.Event;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public final class AssertUtil {
    private AssertUtil() {}

    public static void assertEventTypeTo(Object obj, Event event) {
        assertTrue(event.getSubject().isPresent());
        assertEquals(obj, event.getSubject().get());
    }

}
