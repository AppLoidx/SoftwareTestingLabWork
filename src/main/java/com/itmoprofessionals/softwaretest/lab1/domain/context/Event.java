package com.itmoprofessionals.softwaretest.lab1.domain.context;

import com.itmoprofessionals.softwaretest.lab1.domain.object.PhysicalObject;
import org.jetbrains.annotations.Nullable;

import java.util.Optional;

public class Event {
    private final String description;
    private final EventType eventType;
    @Nullable
    private PhysicalObject subject;

    /**
     *
     * @param description event description
     * @param eventType type of event
     */
    public Event(String description, EventType eventType) {
        this.description = description;
        this.eventType = eventType;
    }

    /**
     *
     * @param description event description
     * @param eventType type of event
     * @param subject physical object that performed event (or target of event)
     */
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

    /**
     * Constructs event
     * @param description event description
     * @param eventType type of event
     * @return event instance
     */
    public static Event of(String description, EventType eventType) {
        return new Event(description, eventType);
    }

    /**
     * Constructs event
     * @param description event description
     * @param eventType type of event
     * @param subject physical object that performed event (or target of event)
     * @return event instance
     */
    public static Event of(String description, EventType eventType, PhysicalObject subject) {
        return new Event(description, eventType, subject);
    }

}
