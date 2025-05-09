import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const MockInterview = pgTable('mockInterview', {
  id: serial('id').primaryKey(),
  jsonMockResp: text('jsonMockResp').notNull(),
  jobPosition: varchar('jobPosition').notNull(),
  jobDesc: varchar('jobDesc').notNull(),
  jobExperience: varchar('jobExperience').notNull(),
  createdBy: varchar('createdBy').notNull(),
  createdAt: varchar('createdAt'),
  mockId: varchar('mockId').notNull()
});

export const UserAnswer = pgTable('userAnswer', {
  id: serial('id').primaryKey(),
  mockIdRef: varchar('mockId').notNull(), // Fixed field name
  question: varchar('question').notNull(),
  correctAns: text('correctAns'),
  userAns: text('userAns'), // Fixed field name
  feedback: text('feedback'),
  rating: varchar('rating'), // Corrected type
  createdAt: varchar('createdAt'),
});

export const Question = pgTable("question", {
  id: serial("id").primaryKey(),
  MockQuestionJsonResp: text("MockQuestionJsonResp").notNull(),
  jobPosition: varchar("jobPosition").notNull(),
  jobDesc: varchar("jobDesc").notNull(),
  jobExperience: varchar("jobExperience").notNull(),
  company: varchar("company").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: varchar("createdAt"),
  mockId: varchar("mockId").notNull(),
});

export const Newsletter = pgTable("newsletter", {
  id: serial("id").primaryKey(),
  newName: varchar("newName"),
  newEmail: varchar("newEmail"),
  newMessage: text("newMessage"),
  createdAt: varchar("createdAt"),
});

export const UserAnswer1 = pgTable('userAnswer1', {
  id: serial('id').primaryKey(),
  mockIdRef: varchar('mockId').notNull(), // Fixed field name
  question: varchar('question').notNull(),
  correctAns: text('correctAns'),
  userAns: text('userAns'), // Fixed field name
  feedback: text('feedback'),
  rating: varchar('rating'), // Corrected type
  createdAt: varchar('createdAt'),
});

export const UserAnswer2 = pgTable('userAnswer2', {
  id: serial('id').primaryKey(),
  mockIdRef: varchar('mockId').notNull(), // Fixed field name
  question: varchar('question').notNull(),
  correctAns: text('correctAns'),
  userAns: text('userAns'), // Fixed field name
  feedback: text('feedback'),
  rating: varchar('rating'), // Corrected type
  createdAt: varchar('createdAt'),
});

export const schema = { MockInterview, UserAnswer };
