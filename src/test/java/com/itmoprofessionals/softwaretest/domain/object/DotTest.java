package com.itmoprofessionals.softwaretest.domain.object;

import com.itmoprofessionals.softwaretest.domain.context.Event;
import com.itmoprofessionals.softwaretest.domain.context.EventType;
import com.itmoprofessionals.softwaretest.util.AssertUtil;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class DotTest {

    @Test
    void constructor() {
        final int expectedId = 1;
        final boolean expectedIsSpark = false;
        Dot dot = new Dot(expectedId, expectedIsSpark);
        assertEquals(expectedId, dot.getId());
        assertEquals(expectedIsSpark, dot.isSpark());
    }

    @Test
    void constructor_sparkTrue() {
        final int expectedId = 1;
        final boolean expectedIsSpark = true;
        Dot dot = new Dot(expectedId, expectedIsSpark);
        assertEquals(expectedId, dot.getId());
        assertEquals(expectedIsSpark, dot.isSpark());
    }

    @Test
    void getObjectTypeName() {
        Dot dot = createSampleDot();
        assertEquals("Dot", dot.getObjectTypeName());
    }

    @Test
    void spark() {
        Dot dot = new Dot(1, false);    // don't use createSampleDot (because spark must be set to false)
        assertFalse(dot.isSpark());

        Event sparkEvent = dot.spark();

        AssertUtil.assertEventTypeTo(dot, sparkEvent);
        assertEquals(EventType.SPARK, sparkEvent.getEventType());
        assertNotNull(sparkEvent.getDescription());
        assertTrue(dot.isSpark());

    }

    @Test
    void light() {
        Dot dot = createSampleDot();
        Event lightEvent = dot.light();

        AssertUtil.assertEventTypeTo(dot, lightEvent);

        assertEquals(EventType.LIGHT, lightEvent.getEventType());
        assertNotNull(lightEvent.getDescription());
    }

    @Test
    void appear() {
        Dot dot = createSampleDot();
        Event appearEvent = dot.appear();

        AssertUtil.assertEventTypeTo(dot, appearEvent);
        assertEquals(EventType.APPEAR, appearEvent.getEventType());
        assertNotNull(appearEvent.getDescription());
    }

    private Dot createSampleDot() {
        return new Dot(1, false);
    }
}