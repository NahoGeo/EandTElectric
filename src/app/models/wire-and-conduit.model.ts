export interface WireType {
    value: string
    fields: Array<WireTypeSecondField>
}

interface WireTypeSecondField {
    wireType: string
    results: {
        val1: string,
        val2: Val2Fields,
        val3: string,
        val4: string
    }
}

interface Val2Fields {
    val1: string
    val2: string
}