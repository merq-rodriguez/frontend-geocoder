import { Injectable } from '@angular/core';
import { CompletionItemProvider } from 'ngx-monaco';

@Injectable()
export class TravisCompletionProvider implements CompletionItemProvider {
	get language() {
		return 'yaml';
	}

	provideCompletionItems(model: monaco.editor.IReadOnlyModel): any {
		const filename = model.uri.path.split('/').pop();

		if (filename !== '.travis.yaml') {
			return [];
		}

		return [
			{
				label: 'language',
				kind: monaco.languages.CompletionItemKind.Property,
				documentation: 'Set the language',
				insertText: 'language: '
			}
		]
	}
}