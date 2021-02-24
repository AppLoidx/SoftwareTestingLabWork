package com.itmoprofessionals.softwaretest.domain.object;

import com.itmoprofessionals.softwaretest.domain.context.Event;
import com.itmoprofessionals.softwaretest.domain.context.EventType;

import java.util.Objects;

public class Dot extends Spark {
    private final int dotId;
    private boolean isSpark = false;

    public Dot(int dotId, boolean isSpark) {
        this.dotId = dotId;
        this.isSpark = isSpark;
    }


    @Override
    public Event spark() {
        isSpark = true;
        return Event.of("Dot number " + this.dotId + " sparkled", EventType.SPARK);
    }

    @Override
    public Event light() {
        return Event.of("Dot number " + dotId + " started lighting", EventType.LIGHT);
    }

    public int getDotId() {
        return dotId;
    }

    public boolean isSpark() {
        return isSpark;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Dot dot = (Dot) o;
        return dotId == dot.dotId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(dotId);
    }
}
