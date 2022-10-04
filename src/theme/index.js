import { createTheme } from '@mui/material/styles';

import { Select } from './atoms/Select';

const partials = [Select];

const components = partials.reduce(
	(component, partial) => createTheme(component, partial(theme)),
	{}
);

const theme = createTheme({
	components: {
		...Select,
	},
});

export default theme;
