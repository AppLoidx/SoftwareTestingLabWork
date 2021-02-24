package com.itmoprofessionals.softwaretest.domain.object;

import com.itmoprofessionals.softwaretest.domain.context.Event;
import com.itmoprofessionals.softwaretest.domain.context.EventType;

import java.util.Objects;

import static com.itmoprofessionals.softwaretest.domain.object.Colors.randomColor;

public class Flash extends Spark {
    private int flashId;
    private String color;


    @Override
    public Event spark() {
        return Event.of("Flash number " + this.flashId + " sparkled", EventType.SPARK);

    }

    @Override
    public Event light() {
        color = String.valueOf(randomColor());
        return Event.of("Flash number " + flashId + " start shining in " + color + " color", EventType.LIGHT);
    }

    public int getFlashId() {
        return flashId;
    }

    public String getColor() {
        return color;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Flash flash = (Flash) o;
        return flashId == flash.flashId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(flashId);
    }
}
