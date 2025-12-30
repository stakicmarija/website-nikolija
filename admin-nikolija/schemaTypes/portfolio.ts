import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'portfolioItem',
    title: 'Portfolio Item',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
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
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Lower number appears first',
            validation: Rule => Rule.required()
        })

    ]
})
