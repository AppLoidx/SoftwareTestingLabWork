package com.itmoprofessionals.softwaretest.domain.object;

import com.itmoprofessionals.softwaretest.domain.context.Event;
import com.itmoprofessionals.softwaretest.domain.context.EventType;

import java.util.Objects;

public abstract class PhysicalObject {
    private final int id;

    public PhysicalObject(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public Event appear() {
        return Event.of("Physical object appeared", EventType.APPEAR);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PhysicalObject that = (PhysicalObject) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
