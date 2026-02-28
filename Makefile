SHELL := /bin/bash

.PHONY: dev build test-links

## Start local dev server

dev:
	pnpm dev

## Build docs

build:
	pnpm build

## Check for broken links

test-links:
	pnpm test-links
