package com.itmoprofessionals.softwaretest.lab1.domain.context;

import org.jetbrains.annotations.NotNull;

import java.util.LinkedList;


public class Scene {
    private final String title;


    // should have order
    @NotNull
    private final LinkedList<Event> events = new LinkedList<>();
    @NotNull
    private EventProcessor eventProcessor = new EventProcessorDefault();

    public Scene(String title) {
        this.title = title;
    }

    /**
     * Add action to scene
     * @param action that produces event
     */
    public void applyAction(Action action) {
        events.add(action.run());
    }

    /**
     * Get all performed events
     * @return ordered events
     */
    public @NotNull LinkedList<Event> getEvents() {
        return events;
    }

    /**
     * String description of scene (processes all added events)
     * @return string description of scene
     */
    public String sceneDescription() {
        return String.format("Scene : %s\n--------------------\n%s", title, events.stream()
                .map(eventProcessor::processEvent)
                .reduce((m1, m2) -> String.format("%s\n%s", m1, m2))
                .orElse("No events"));
    }

    /**
     * Set event processor that would be used to describe a scene {@link Scene#sceneDescription()}
     * @param eventProcessor processor that would be used to describe a scene
     * @see Scene#sceneDescription()
     */
    public void setEventProcessor(@NotNull EventProcessor eventProcessor) {
        this.eventProcessor = eventProcessor;
    }

    public String getTitle() {
        return title;
    }
}
