import type { TinaField } from "tinacms";
export function artist_statementFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "Profile Image",
    },
  ] as TinaField[];
}
export function artworkFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
      isTitle: true,
      ui: {
        description: "The name of the work",
      },
    },
    {
      type: "image",
      name: "image",
      label: "Main Image",
    },
    {
      type: "image",
      name: "images",
      label: "Other Images",
      list: true,
      ui: {
        description: "All other images of the piece (for slider)",
      },
    },
    {
      type: "number",
      name: "year",
      label: "Year",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: false,
      ui: {
        description: "Date used for sorting, only year will be displayed",
      },
    },
    {
      type: "string",
      name: "type",
      label: "Type of Work",
      required: true,
      options: ["Installation", "Sculpture", "Collage", "Photography", "Wall Hangings"],
    },
    {
      type: "string",
      name: "media_type",
      label: "Media Type",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "dimensions",
      label: "Dimensions",
      ui: {
        description: "Dimensions of piece (can be blank)",
      },
    },
    {
      type: "string",
      name: "exhibition",
      label: "Exhibition",
      ui: {
        description: "Relevant exhibition for work (will appear above description)",
      },
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        description: "Leave this as 'artwork'",
      },
    },
  ] as TinaField[];
}
export function cvFields() {
  return [
    {
      type: "object",
      name: "education",
      label: "Education",
      list: true,
      fields: [
        {
          type: "string",
          name: "school",
          label: "School",
        },
        {
          type: "string",
          name: "degree",
          label: "Degree",
        },
      ],
    },
    {
      type: "object",
      name: "work",
      label: "Work",
      list: true,
      fields: [
        {
          type: "string",
          name: "dates",
          label: "Dates",
        },
        {
          type: "string",
          name: "workplace",
          label: "Workplace",
        },
        {
          type: "string",
          name: "job_title",
          label: "Job Title",
        },
      ],
    },
    {
      type: "object",
      name: "artist_residencies",
      label: "Artist Residencies",
      list: true,
      fields: [
        {
          type: "number",
          name: "year",
          label: "Year",
        },
        {
          type: "datetime",
          name: "date",
          label: "Date",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "place",
          label: "Place",
        },
      ],
    },
    {
      type: "object",
      name: "solo_exhibitions",
      label: "Solo Exhibitions",
      list: true,
      fields: [
        {
          type: "number",
          name: "year",
          label: "Year",
        },
        {
          type: "datetime",
          name: "date",
          label: "Date",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "place",
          label: "Place",
        },
      ],
    },
    {
      type: "object",
      name: "group_exhibitions",
      label: "Group Exhibitions",
      list: true,
      fields: [
        {
          type: "number",
          name: "year",
          label: "Year",
        },
        {
          type: "datetime",
          name: "date",
          label: "Date",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "place",
          label: "Place",
        },
      ],
    },
    {
      type: "object",
      name: "publications",
      label: "Publications",
      list: true,
      fields: [
        {
          type: "number",
          name: "year",
          label: "Year",
        },
        {
          type: "datetime",
          name: "date",
          label: "Date",
        },
        {
          type: "string",
          name: "details",
          label: "Details",
        },
      ],
    },
    {
      type: "object",
      name: "curatorial_projects",
      label: "Curatorial Projects",
      list: true,
      fields: [
        {
          type: "number",
          name: "year",
          label: "Year",
        },
        {
          type: "datetime",
          name: "date",
          label: "Date",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "place",
          label: "Place",
        },
      ],
    },
    {
      type: "object",
      name: "awards",
      label: "Awards",
      list: true,
      fields: [
        {
          type: "number",
          name: "year",
          label: "Year",
        },
        {
          type: "datetime",
          name: "date",
          label: "Date",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "details",
          label: "Details",
        },
      ],
    },
  ] as TinaField[];
}
export function frontpageFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "images",
      label: "images",
      list: true,
    },
  ] as TinaField[];
}
export function navigationFields() {
  return [
    {
      type: "object",
      name: "Navigation",
      label: "Navigation",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "string",
          name: "link",
          label: "link",
        },
      ],
    },
  ] as TinaField[];
}
