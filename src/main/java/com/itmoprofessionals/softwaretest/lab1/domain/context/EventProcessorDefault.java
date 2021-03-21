package com.itmoprofessionals.softwaretest.lab1.domain.context;

import com.itmoprofessionals.softwaretest.lab1.domain.object.PhysicalObject;

/**
 * Default event processor for {@link Scene#sceneDescription()}
 *
 * @see Scene
 */
public class EventProcessorDefault implements EventProcessor {
    /**
     *
     * @param event not null event object
     * @return string interpretation of event
     * @throws IllegalArgumentException when passed null as {@link Event}
     */
    @Override
    public String processEvent(Event event) {
        if (event == null) throw new IllegalArgumentException("Argument should not be null");
        final String subjectMsg = event.getSubject().map(PhysicalObject::getObjectTypeName).orElse("[No subject]");
        return String.format("[Event - %s] => Subject: %s; Description: %s",
                event.getEventType(),
                subjectMsg,
                event.getDescription());
    }
}
