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
            name: 'year',
            title: 'Year',
            type: 'number',
            validation: Rule => Rule.required().min(1900).max(new Date().getFullYear())
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery / Venue',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text'
                        }
                    ]
                }
            ]
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: doc => `${doc.title}-${doc.year}-${doc.gallery}`, // čini slug unikatan
                maxLength: 96
            },
            validation: Rule => Rule.required()
        })

    ]
});
