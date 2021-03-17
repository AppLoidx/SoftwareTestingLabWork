package com.itmoprofessionals.softwaretest.domain.object;

import com.itmoprofessionals.softwaretest.domain.context.Event;
import com.itmoprofessionals.softwaretest.util.AssertUtil;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class FlashTest {

    @Test
    void objectTypeName() {
        Flash flash = new Flash(1);
        assertEquals("Flash", flash.getObjectTypeName());
    }

    @Test
    void sparkEvent() {
        Flash flash = new Flash(1);
        Event spark = flash.spark();
        assertAll(
                () -> assertNotNull(spark),
                () -> AssertUtil.assertEventTypeTo(flash, spark));
    }

}