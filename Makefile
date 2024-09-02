set = pnpm

install:
	$(set) install

start:
	$(set) run dev

test:
	$(set) run test

preview:
	$(set) run preview

build:
	$(set) run build