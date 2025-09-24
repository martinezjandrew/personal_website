# Changelog

All notable changes to the website will be documented here.

## 1.3.0 - Introducing the Log - Sept 24, 2025

### Added

- Created a new Log section.
- Created a new Changelog page under the Log section.
- Created a new `changelog.md` file to keep track of changes.
  - the Changelog page renders this file as content for the page.
- Created a new Todo page under the Log section.
- Created a new `todo.md` file to keep track of goals, both completed and not.
  - the Todo page renders this file as content for the page.

### Changed

- Removed the "Todo" section.
- Updated the base styling for markdown content within the Body component.

## 1.2.0 - Introducing the Blog - Sept 23, 2025

### Added

- Created a new Blog page and BlogPost page.
- Created a folder to host all static markdown pages.
- Updated router for dynamic links to new pages.

### Changed

- Added resume as static content and removed Supabase connection.

## 1.1.1 - Remove Supabase Connection - Sep 8, 2025

### Added

- Created new .yaml file to store all project data.

### Changed

- Projects Page now builds project components and presents them statically.

### Removed

- Removed supabase connection due to database closing after no calls within a week.

## 1.1.0 - Blusky Connection - Jul 14, 2025

### Added

- Bluesky component that pulls my latest blusky tweet with custom animated avatar.

## 1.0.0 - Initial Release - Jul 2, 2025

### Added

- Home Page.
- About Page.
- Resume Page.
- Projects Page.
- Supabase connection.
- Custom background.
- Custom header.
