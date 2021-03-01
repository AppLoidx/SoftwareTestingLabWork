package com.itmoprofessionals.softwaretest.domain.object;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SunTest {
    @Test
    void objectType() {
        Sun sun = new Sun(1, false);
        assertEquals("Sun", sun.getObjectTypeName());
    }
}