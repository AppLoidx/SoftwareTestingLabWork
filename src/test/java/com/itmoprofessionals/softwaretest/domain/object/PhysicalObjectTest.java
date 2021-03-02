package com.itmoprofessionals.softwaretest.domain.object;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Matchers.*;
import static org.mockito.Mockito.when;

class PhysicalObjectTest {
    @Test
    void equalsCheck() {
        PhysicalObject physicalObject1 = createPhysicalObject(1);

        PhysicalObject physicalObject2 = createPhysicalObject(1);


        assertEquals(physicalObject1, physicalObject2);
    }

    @Test
    void defaultPhysicalObjectType() {
        PhysicalObject physicalObject = createPhysicalObjectWithMockito();
        assertEquals("Physical object", physicalObject.getObjectTypeName());
    }

    @Test
    void defaultAppearEvent() {
        PhysicalObject physicalObject = createPhysicalObjectWithMockito();
        assertNotNull(physicalObject.appear());
    }

    @Test
    void equalsHashcodeContract() {
        PhysicalObject p1 = createPhysicalObject(1);
        PhysicalObject p1Same = createPhysicalObject(1);
        PhysicalObject p2 = createPhysicalObject(2);

        assertEquals(p1, p1Same);
        assertEquals(p1.hashCode(), p1Same.hashCode());
        assertNotEquals(p1, p2);
    }

    PhysicalObject createPhysicalObjectWithMockito() {
        return Mockito.mock(PhysicalObject.class, Mockito.CALLS_REAL_METHODS);
    }

    PhysicalObject createPhysicalObject(int id) {
        return new PhysicalObject(id) {};
    }

}