package com.itmoprofessionals.softwaretest.domain.context;

import com.itmoprofessionals.softwaretest.domain.object.PhysicalObject;
import org.jetbrains.annotations.Nullable;

import java.util.Optional;

public class Event {
    private final String description;
    private final EventType eventType;
    @Nullable
    private PhysicalObject subject;

    public Event(String description, EventType eventType) {
        this.description = description;
        this.eventType = eventType;
    }

    public Event(String description, EventType eventType, @Nullable PhysicalObject subject) {
        this(description, eventType);
        this.subject = subject;
    }

    public String getDescription() {
        return description;
    }

    public EventType getEventType() {
        return eventType;
    }

    public Optional<PhysicalObject> getSubject() {
        return Optional.ofNullable(subject);
    }

    public static Event of(String description, EventType eventType) {
        return new Event(description, eventType);
    }

    public static Event of(String description, EventType eventType, PhysicalObject object) {
        return new Event(description, eventType, object);
    }

}
