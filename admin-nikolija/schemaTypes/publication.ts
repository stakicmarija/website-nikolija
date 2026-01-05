import { defineType, defineField } from "sanity";

export default defineType({
    name: 'publication',
    title: 'Publication',
    type: 'document',
    fields: [
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
            description: 'Text to display instead of the raw link',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
            validation: Rule => Rule.required()
        })
    ]
});
