import type { TinaField } from "tinacms";
export function artist_statementFields() {
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
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
  ] as TinaField[];
}
export function artworkFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
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
    },
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
      name: "type",
      label: "Type of Work",
      options: ["Installation", "Sculpture", "Collage"],
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
    },
    {
      type: "string",
      name: "exhibition",
      label: "Exhibition",
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
