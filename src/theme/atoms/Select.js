export const Select = (theme) => {
	return {
		MuiSelect: {
			styleOverrides: {
				root: {
					'&.input-success': {
						input: {
							borderColor: theme.palette.success.dark,
						},
					},
					'&.Mui-error': {
						'.MuiSelect-select': {
							border: `2px solid ${theme.palette.error.dark}`,
						},
					},
					'.MuiSelect-select': {
						backgroundColor: theme.palette.utility.extralight,
						border: `2px solid ${theme.palette.tertiary.light}`,
						borderRadius: 100,
						padding: 0,
						paddingRight: 23,
						paddingLeft: 23,
						height: '48px !important',
						fontSize: 15,
						width: '100% !important',
						display: 'flex',
						alignItems: 'center',
						color: theme.palette.utility.extradark,
						'&:hover': {
							border: `2px solid ${theme.palette.tertiary.dark}`,
						},
						'&:active': {
							border: `2px solid ${theme.palette.secondary.main}`,
							borderRadius: 100,
							backgroundColor: theme.palette.utility.extralight,
						},
						'&:focus': {
							border: `2px solid ${theme.palette.secondary.main}`,
							borderRadius: 100,
							backgroundColor: `${theme.palette.utility.extralight}`,
						},
						'&.Mui-disabled': {
							border: `2px solid ${theme.palette.utility.light}`,
							backgroundColor: theme.palette.utility.light,
							opacity: 0.6,
						},
						'&[aria-expanded=true]': {
							border: `2px solid ${theme.palette.secondary.main}`,
						},
					},
					'.MuiSelect-icon': {
						right: 12,
						path: {
							fill: theme.palette.utility.extradark,
						},
						'&.Mui-disabled': {
							path: {
								fill: theme.palette.utility.main,
							},
						},
					},
					fieldset: {
						display: 'none',
					},
				},
			},
		},
	};
};
