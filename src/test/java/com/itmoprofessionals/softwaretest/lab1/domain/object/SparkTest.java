package com.itmoprofessionals.softwaretest.lab1.domain.object;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.*;

class SparkTest {
    @Test
    void defaultObjectTypeForSparks() {
        Spark spark = Mockito.mock(Spark.class, Mockito.CALLS_REAL_METHODS);
        assertEquals("Spark", spark.getObjectTypeName());
    }
}