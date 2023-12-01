import { ServiceSchema } from "../../../lib/types";

const Service: ServiceSchema = {
	name: "profile",
	version: "api.v1",

	/**
	 * Service settings
	 */
	settings: {},

	/**
	 * Service dependencies
	 */
	// dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		me: {
			permission: ["api.v1.profile.me"],
			rest: "GET /",
			handler(ctx) {
				return {
					code: 200,
					data: ctx.meta.accessWhoisthis,
				};
			},
		},
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {},

	/**
	 * Service created lifecycle event handler
	 */
	// created() {},

	/**
	 * Service started lifecycle event handler
	 */
	// started() { },

	/**
	 * Service stopped lifecycle event handler
	 */
	// stopped() { }
};

export = Service;
