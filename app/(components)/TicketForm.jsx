"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TicketForm = () => {
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "new",
    category: "test",
  };

  const [formData, setFormData] = useState(startingTicketData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Failed to create ticket");
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h3> Create your ticket</h3>
        <label> Title </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label> Description </label>
        <input
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="4"
        />

        <label> Category </label>
        <select
          name="category"
          value="formData.category"
          onChange={handleChange}
        >
          <option value="test">Test</option>
          <option value="bug">Bug</option>
          <option value="feature">Feature</option>
        </select>

        <label> Priority </label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label> 1 </label>

          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label> 2 </label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label> 3 </label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label> 4 </label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label> 5 </label>
        </div>

        <label> Progress </label>
        <input
          type="range"
          id="progress"
          name="progress"
          min="0"
          max="100"
          value={formData.progress}
          onChange={handleChange}
        />

        <label> Status </label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="new">New</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <input type="submit" className="btn" value="Create Ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
