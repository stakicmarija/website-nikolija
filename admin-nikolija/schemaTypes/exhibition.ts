import { defineType, defineField } from "sanity";

export default defineType({
    name: 'exhibition',
    title: 'Exhibition',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Solo', value: 'solo' },
                    { title: 'Group', value: 'group' }
                ],
                layout: 'radio'
            }
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true }
                }
            ]
        })
    ]
});