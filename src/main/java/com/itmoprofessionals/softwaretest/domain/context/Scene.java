package com.itmoprofessionals.softwaretest.domain.context;

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

    public void applyAction(Action action) {
        events.add(action.run());
    }

    public @NotNull LinkedList<Event> getEvents() {
        return events;
    }

    public String sceneDescription() {
        return String.format("Scene : %s\n--------------------\n%s", title, events.stream()
                .map(eventProcessor::processEvent)
                .reduce((m1, m2) -> String.format("%s\n%s", m1, m2))
                .orElse("No events"));
    }

    public void setEventProcessor(@NotNull EventProcessor eventProcessor) {
        this.eventProcessor = eventProcessor;
    }

    public String getTitle() {
        return title;
    }
}
