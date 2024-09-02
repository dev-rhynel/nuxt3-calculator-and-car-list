set = pnpm

install:
	$(set) install

start:
	$(set) run dev

test:
	$(set) run test

storybook:
	$(set) run storybook

build:
	$(set) run build