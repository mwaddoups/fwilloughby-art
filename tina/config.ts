import { defineConfig } from "tinacms";
import { artist_statementFields } from "./templates";
import { artworkFields } from "./templates";
import { cvFields } from "./templates";
import { frontpageFields } from "./templates";
import { navigationFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "b760babf-27ce-489a-b43c-ce87aa72467d", // Get this from tina.io
  token: "fe47bd75e863ad1de45112a37a1a721c62b29eb4", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "assets/images",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        format: "yml",
        label: "CV",
        name: "cv",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "cv",
        },
        fields: [
          {
            type: "object",
            name: "education",
            label: "Education",
            list: true,
            ui: {
              itemProps: (item) => { return { label: item?.school } },
            },
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
            ui: {
              itemProps: (item) => { return { label: item?.workplace } },
            },
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
            ui: {
              itemProps: (item) => { return { label: item?.place } },
            },
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
            ui: {
              itemProps: (item) => { return { label: item?.title } },
            },
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
            ui: {
              itemProps: (item) => { return { label: item?.title } },
            },
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
            ui: {
              itemProps: (item) => { return { label: item?.details } },
            },
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
            ui: {
              itemProps: (item) => { return { label: item?.title } },
            },
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
            ui: {
              itemProps: (item) => { return { label: item?.title } },
            },
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
        ],
      },
      {
        format: "md",
        label: "Artwork",
        name: "artwork",
        path: "_artwork",
        match: {
          include: "**/*",
        },
        fields: [
          {
            name: "draft",
            label: "Draft",
            type: "boolean",
            required: true,
          },
          ...artworkFields(),
        ],
      },
    ],
  },
});
