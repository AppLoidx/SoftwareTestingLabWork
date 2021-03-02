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

    PhysicalObject createPhysicalObjectWithMockito() {
        return Mockito.mock(PhysicalObject.class, Mockito.CALLS_REAL_METHODS);
    }

    PhysicalObject createPhysicalObject(int id) {
        return new PhysicalObject(id) {};
    }

}