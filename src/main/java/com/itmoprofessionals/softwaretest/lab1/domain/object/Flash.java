package com.itmoprofessionals.softwaretest.lab1.domain.object;

import com.itmoprofessionals.softwaretest.lab1.domain.context.Event;
import com.itmoprofessionals.softwaretest.lab1.domain.context.EventType;

import static com.itmoprofessionals.softwaretest.lab1.domain.object.Colors.randomColor;

public class Flash extends Spark {
    private String color;

    public Flash(int objectId) {
        super(objectId);
    }

    @Override
    public String getObjectTypeName() {
        return "Flash";
    }

    @Override
    public Event spark() {
        final String eventDescription = String.format("Flash number %d sparkled", this.getId());

        return Event.of(eventDescription, EventType.SPARK, this);
    }

    @Override
    public Event light() {
        color = String.valueOf(randomColor());
        final String eventDescription = String.format("Flash number %d start shining in %s color", this.getId(), color);

        return Event.of(eventDescription, EventType.LIGHT, this);
    }

    public String getColor() {
        return color;
    }

}
