import DefaultField from './components/DefaultField.vue'
import PanelItem from './components/PanelItem.vue'
import DateIndexField from './components/date/IndexField.vue'
import Excerpt from './components/Excerpt.vue'
import DateDetailField from './components/date/DetailField.vue'
import DateTimeIndexField from './components/date-time/IndexField.vue'
import TextFormField from './components/text/FormField.vue'
import DateTimeDetailField from './components/date-time/DetailField.vue'
import DateTimeFormField from './components/date-time/FormField.vue'
import DateFormField from './components/date/FormField.vue'
import TextIndexField from './components/text/IndexField.vue'
import TextDetailField from './components/text/DetailField.vue'
import ComputedFormField from './components/computed/FormField.vue'
import TextAreaDetailField from './components/textarea/DetailField.vue'
import TextAreaFormField from './components/textarea/FormField.vue'
import PasswordIndexField from './components/password/IndexField.vue'
import PasswordDetailField from './components/password/DetailField.vue'
import PasswordFormField from './components/password/FormField.vue'
import BooleanIndexField from './components/boolean/IndexField.vue'
import BooleanDetailField from './components/boolean/DetailField.vue'
import BooleanFormField from './components/boolean/FormField.vue'
import SelectFormField from './components/select/FormField.vue'
import AutoCompleteFormField from './components/autocomplete/FormField.vue'
import FileIndexField from './components/file/IndexField.vue'
import FileDetailField from './components/file/DetailField.vue'
import FileFormField from './components/file/FormField.vue'
import TrixFormField from './components/trix/FormField.vue'
import RowDetailField from './components/row/DetailField.vue'
import JsonIndexField from './components/json/IndexField.vue'
import RowIndexField from './components/row/IndexField.vue'
import JsonDetailField from './components/json/DetailField.vue'
import BelongsToIndexField from './components/belongs-to/IndexField.vue'
import RowFormField from './components/row/FormField.vue'
import BelongsToDetailField from './components/belongs-to/DetailField.vue'
import BelongsToFormField from './components/belongs-to/FormField.vue'
import JsonFormField from './components/json/FormField.vue'

Nova.booting((app, store) => {
    /** Shared */
    app.component('r64-default-field', DefaultField)
    app.component('r64-panel-item', PanelItem)
    app.component('r64-excerpt', Excerpt)

    /** Text & Number */
    app.component(
        'index-nova-fields-text',
        TextIndexField
    )
    app.component(
        'detail-nova-fields-text',
        TextDetailField
    )
    app.component('form-nova-fields-text', TextFormField)

    /** Date */
    app.component(
        'index-nova-fields-date',
        DateIndexField
    )
    app.component(
        'detail-nova-fields-date',
        DateDetailField
    )
    app.component('form-nova-fields-date', DateFormField)

    /** DateTime */
    app.component(
        'index-nova-fields-date-time',
        DateTimeIndexField
    )
    app.component(
        'detail-nova-fields-date-time',
        DateTimeDetailField
    )
    app.component(
        'form-nova-fields-date-time',
        DateTimeFormField
    )

    /** Computed */
    app.component(
        'index-nova-fields-computed',
        TextIndexField
    )
    app.component(
        'detail-nova-fields-computed',
        TextDetailField
    )
    app.component(
        'form-nova-fields-computed',
        TextFormField
    )

    /** Textarea */
    app.component(
        'index-nova-fields-textarea',
        TextIndexField
    )
    app.component(
        'detail-nova-fields-textarea',
        TextAreaDetailField
    )
    app.component(
        'form-nova-fields-textarea',
        TextAreaFormField
    )

    /** Password */
    app.component(
        'index-nova-fields-password',
        PasswordIndexField
    )
    app.component(
        'detail-nova-fields-password',
        PasswordDetailField
    )
    app.component(
        'form-nova-fields-password',
        PasswordFormField
    )

    /** Boolean */
    app.component(
        'index-nova-fields-boolean',
        BooleanIndexField
    )
    app.component(
        'detail-nova-fields-boolean',
        BooleanDetailField
    )
    app.component(
        'form-nova-fields-boolean',
        BooleanFormField
    )

    /** Select */
    app.component(
        'index-nova-fields-select',
        TextIndexField
    )
    app.component(
        'detail-nova-fields-select',
        TextDetailField
    )
    app.component(
        'form-nova-fields-select',
        SelectFormField
    )

    /** Autocomplete */
    app.component(
        'index-nova-fields-autocomplete',
        TextIndexField
    )
    app.component(
        'detail-nova-fields-autocomplete',
        TextDetailField
    )
    app.component(
        'form-nova-fields-autocomplete',
        AutoCompleteFormField
    )

    /** File & Image */
    app.component(
        'index-nova-fields-file',
        FileIndexField
    )
    app.component(
        'detail-nova-fields-file',
        FileDetailField
    )
    app.component('form-nova-fields-file', FileFormField)

    /** Trix */
    app.component(
        'detail-nova-fields-trix',
        TextAreaDetailField
    )
    app.component('form-nova-fields-trix', TrixFormField)

    /** R64 Fields */

    /** Row */
    app.component('index-nova-fields-row', RowIndexField)
    app.component(
        'detail-nova-fields-row',
        RowDetailField
    )
    app.component('form-nova-fields-row', RowFormField)

    /** JSON */
    app.component(
        'index-nova-fields-json',
        JsonIndexField
    )
    app.component(
        'detail-nova-fields-json',
        JsonDetailField
    )
    app.component('form-nova-fields-json', JsonFormField)

    /** RELATIONS */

    /** BelongsTo */
    app.component(
        'index-nova-fields-belongs-to',
        BelongsToIndexField
    )
    app.component(
        'detail-nova-fields-belongs-to',
        BelongsToDetailField
    )
    app.component(
        'form-nova-fields-belongs-to',
        BelongsToFormField
    )
})
