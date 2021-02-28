package com.itmoprofessionals.softwaretest.domain.context;

import com.itmoprofessionals.softwaretest.domain.object.PhysicalObject;

public class EventProcessorDefault implements EventProcessor{
    @Override
    public String processEvent(Event event) {
        final String subjectMsg = event.getSubject().map(PhysicalObject::getObjectTypeName).orElse("[No subject]");
        return String.format("[Event - %s] => Subject: %s; Description: %s",
                event.getEventType(),
                subjectMsg,
                event.getDescription());
    }
}
